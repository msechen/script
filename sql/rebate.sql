CREATE DATABASE `rebate` DEFAULT CHARACTER SET utf8mb4 DEFAULT COLLATE=utf8mb4_0900_ai_ci;

USE `rebate`;

CREATE TABLE `jd_item` (
  `id` INT(10) UNSIGNED NOT NULL AUTO_INCREMENT COMMENT '自增主键',
  `channel` TINYINT(3) UNSIGNED NOT NULL COMMENT '频道 id',
  `skuid` BIGINT(20) NOT NULL COMMENT '商品 skuid',
  `name` VARCHAR(256) NOT NULL COMMENT '商品名称',
  `image` VARCHAR(256) NOT NULL COMMENT '图片',
  `shop` VARCHAR(128) DEFAULT NULL COMMENT '店铺名',
  `price` DECIMAL(12,2) UNSIGNED NOT NULL COMMENT '原价',
  `floor_price` DECIMAL(12,2) UNSIGNED NOT NULL COMMENT '最低价',
  `popularize_url` VARCHAR(1024) NOT NULL COMMENT '推广地址',
  `coupons` TEXT COMMENT '优惠券 json array',
  `together_buy` TEXT COMMENT '拼购 json',
  `sec_kill` TEXT COMMENT '秒杀 json',
  `jd_delivery` TINYINT(3) UNSIGNED NOT NULL COMMENT '京东配送 0=否 1=是',
  `jd_operate` TINYINT(3) UNSIGNED NOT NULL COMMENT '京东自营 0=否 1=是',
  `create_time` INT(10) UNSIGNED NOT NULL COMMENT '创建时间',
  `update_time` INT(10) UNSIGNED NOT NULL COMMENT '更新时间',
  PRIMARY KEY (`id`),
  UNIQUE KEY `udx_skuid` (`skuid`),
  KEY `idx_update_time` (`create_time`,`update_time`)
) ENGINE=INNODB COMMENT='京东商品';


CREATE TABLE `surl` (
  `id` VARCHAR(16) NOT NULL COMMENT 'id',
  `original_url` VARCHAR(1024) NOT NULL COMMENT '原始 url',
  `create_time` BIGINT(20) UNSIGNED NOT NULL COMMENT '创建时间戳',
  PRIMARY KEY (`id`)
) ENGINE=INNODB COMMENT='短链接';
