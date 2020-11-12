create table t_bk_concept
(
    bk_code varchar(6) not null,
    fu_bk_code varchar(3) not null,
    bk_name varchar(8) not null,
    publish_code varchar(6) not null,
    update_time datetime not null,
    constraint t_bk_concept_bk_code_uindex
        unique (bk_code),
    constraint t_bk_concept_bk_name_uindex
        unique (bk_name),
    constraint t_bk_concept_publish_code_uindex
        unique (publish_code)
);

alter table t_bk_concept
    add primary key (bk_code);

create table t_bk_industry
(
    bk_code varchar(6) not null,
    fu_bk_code varchar(3) default '16' not null,
    bk_name varchar(8) not null,
    publish_code varchar(6) not null,
    update_time datetime not null,
    constraint t_industry_bk_bk_code_uindex
        unique (bk_code),
    constraint t_industry_bk_publish_code_uindex
        unique (publish_code)
);

alter table t_bk_industry
    add primary key (bk_code);

create table t_bk_region
(
    bk_code varchar(6) not null comment '板块编码',
    fu_bk_code varchar(3) default '20' not null,
    bk_name varchar(8) not null,
    publish_code varchar(6) not null,
    update_time datetime not null,
    constraint t_bk_region_bk_code_uindex
        unique (bk_code),
    constraint t_bk_region_bk_name_uindex
        unique (bk_name),
    constraint t_bk_region_publish_code_uindex
        unique (publish_code)
);

alter table t_bk_region
    add primary key (bk_code);

create table t_stock
(
    stock_id varchar(8) not null,
    stock_name varchar(32) not null,
    update_time datetime not null,
    exchange varchar(2) not null comment '所属交易所:sh,sz',
    constraint t_stock_stock_id_uindex
        unique (stock_id),
    constraint t_stock_stock_name_uindex
        unique (stock_name)
)
    comment '个股信息表';

alter table t_stock
    add primary key (stock_id);

