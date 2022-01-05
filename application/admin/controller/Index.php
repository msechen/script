<?php
namespace app\admin\controller;

use app\admin\service\NodeService;
use library\Controller;
use library\tools\Data;
use think\Console;
use think\Db;
use think\exception\HttpResponseException;
use think\cache\driver\Redis;
use think\facade\Cache;

/**
 * 系统公共操作
 * Class Index
 * @package app\admin\controller
 */
class Index extends Controller
{
    public function test(){
        include '../application/notice.php';
        // echo config('intranet_communication');
        // $menberId = 111;
        // $value = [7,121,22,28];
        //这里的参数我就不多说了，多看手册。
        // Cache::store('redis')->set($menberId, $value);
        // dump(Cache::store('redis')->get('wxid_rqn31uwmjug922'));
    }

    /**
     * 显示后台首页
     * @throws \ReflectionException
     * @throws \think\db\exception\DataNotFoundException
     * @throws \think\db\exception\ModelNotFoundException
     * @throws \think\exception\DbException
     */
    public function index()
    {
        $this->title = '系统管理后台';
        NodeService::applyUserAuth(true);
        $this->menus = NodeService::getMenuNodeTree();
        if (empty($this->menus) && !NodeService::islogin()) {
            $this->redirect('@admin/login');
        } else {
            $this->fetch();
        }
    }

    /**
     * 后台环境信息
     * @auth true
     * @menu true
     */
    public function main()
    {
        $this->think_ver = \think\App::VERSION;
        $this->mysql_ver = Db::query('select version() as ver')[0]['ver'];

       
        $isVersion = '';
        if (!session('check_update_version')){
            $isVersion = $this->Update(1);
        }

        $this->assign('has_version', $isVersion);
        $this->fetch();
    }

    /**
     * 修改密码
     * @param integer $id
     * @throws \think\Exception
     * @throws \think\db\exception\DataNotFoundException
     * @throws \think\db\exception\ModelNotFoundException
     * @throws \think\exception\DbException
     * @throws \think\exception\PDOException
     */
    public function pass($id)
    {
        $this->applyCsrfToken();
        if (intval($id) !== intval(session('admin_user.id'))) {
            $this->error('只能修改当前用户的密码！');
        }
        if (!NodeService::islogin()) {
            $this->error('需要登录才能操作哦！');
        }
        if ($this->request->isGet()) {
            $this->verify = true;
            $this->_form('SystemUser', 'admin@user/pass', 'id', [], ['id' => $id]);
        } else {
            $data = $this->_input([
                'password'    => $this->request->post('password'),
                'repassword'  => $this->request->post('repassword'),
                'oldpassword' => $this->request->post('oldpassword'),
            ], [
                'oldpassword' => 'require',
                'password'    => 'require|min:4',
                'repassword'  => 'require|confirm:password',
            ], [
                'oldpassword.require' => '旧密码不能为空！',
                'password.require'    => '登录密码不能为空！',
                'password.min'        => '登录密码长度不能少于4位有效字符！',
                'repassword.require'  => '重复密码不能为空！',
                'repassword.confirm'  => '重复密码与登录密码不匹配，请重新输入！',
            ]);
            $user = Db::name('SystemUser')->where(['id' => $id])->find();
            if (md5($data['oldpassword']) !== $user['password']) {
                $this->error('旧密码验证失败，请重新输入！');
            }
            $result = NodeService::checkpwd($data['password']);
            if (empty($result['code'])) $this->error($result['msg']);
            if (Data::save('SystemUser', ['id' => $user['id'], 'password' => md5($data['password'])])) {
                $this->success('密码修改成功，下次请使用新密码登录！', '');
            } else {
                $this->error('密码修改失败，请稍候再试！');
            }
        }
    }

    /**
     * 修改用户资料
     * @param integer $id 会员ID
     * @throws \think\Exception
     * @throws \think\db\exception\DataNotFoundException
     * @throws \think\db\exception\ModelNotFoundException
     * @throws \think\exception\DbException
     * @throws \think\exception\PDOException
     */
    public function info($id = 0)
    {
        if (!NodeService::islogin()) {
            $this->error('需要登录才能操作哦！');
        }
        $this->applyCsrfToken();
        if (intval($id) === intval(session('admin_user.id'))) {
            $this->_form('SystemUser', 'admin@user/form', 'id', [], ['id' => $id]);
        } else {
            $this->error('只能修改登录用户的资料！');
        }
    }

    /**
     * 清理运行缓存
     * @auth true
     */
    public function clearRuntime()
    {
        if (!NodeService::islogin()) {
            $this->error('需要登录才能操作哦！');
        }
        try {
            Console::call('clear');
            Console::call('xclean:session');
            $this->success('清理运行缓存成功！');
        } catch (HttpResponseException $exception) {
            throw $exception;
        } catch (\Exception $e) {
            $this->error("清理运行缓存失败，{$e->getMessage()}");
        }
    }

    /**
     * 压缩发布系统
     * @auth true
     */
    public function buildOptimize()
    {
        if (!NodeService::islogin()) {
            $this->error('需要登录才能操作哦！');
        }
        try {
            Console::call('optimize:route');
            Console::call('optimize:schema');
            Console::call('optimize:autoload');
            Console::call('optimize:config');
            $this->success('压缩发布成功！');
        } catch (HttpResponseException $exception) {
            throw $exception;
        } catch (\Exception $e) {
            $this->error("压缩发布失败，{$e->getMessage()}");
        }
    }


    public function Update($isreturn)
    {
        $version = config("version");
        $isHtml = $isreturn?0:1;
        $con = '已经是最新版，搭建找对眼熊';
        session('check_update_version',1);
        if($isreturn ) return $con;

        echo $con;die;
    }


    public function order_info()
    {
        if (!NodeService::islogin()) {
            $this->error('需要登录才能操作哦！');
        }


        $deposit = db('xy_deposit')->where('status',1)->count('id');
        $recharge = db('xy_recharge')->where('status',1)->count('id');
        echo json_encode(['deposit'=>$deposit,'recharge'=>$recharge]);

    }

    public function clear()
    {
        $isVersion = $this->Update(0);
    }

}
