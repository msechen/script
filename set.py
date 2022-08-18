import json
import os

if not os.path.exists('firstrun'):
	token=input('请输入机器人token:')
	my_id=input('请输入你的ID(纯数字那串):')
	qr=input('是/否需要终端二维码显示(y/n):')
	print('配置完成!')
	data={'token':token,'my_id':my_id,'qr':qr}
	with open('data.json','w')as f:
		f.write(json.dumps(data,ensure_ascii=False))
	os.system('touch firstrun && clear')
else:
	act=input('已经配置过了,是/否重新配置(y/n):')
	if act=='y':
		token=input('请输入机器人token:')
		my_id=input('请输入你的ID(纯数字那串):')
		qr=input('是/否需要终端二维码显示(y/n):')
		os.system('rm -rf data.json')
		data={'token':token,'my_id':my_id,'qr':qr}
		with open('data.json','w')as f:
			f.write(json.dumps(data,ensure_ascii=False))
	else:
		pass