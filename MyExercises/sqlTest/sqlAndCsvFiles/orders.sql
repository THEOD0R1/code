drop table if exists orders;

create table orders (
id int not null,
companyId int not null,
created datetime not null,
createdBy varchar(100) not null,
paymentMethod varchar(45) not null,
totalPrice int not null,
status int not null,
primary key (id)
);

insert into orders (id, companyId, created, createdBy, paymentMethod, totalPrice, status) values(276, 77, "2017-12-20T10:36:29.039", "sar@gmail.com", "PayPal", 1000, 1),
(277, 77, "2017-12-20T10:40:19.508", "sar@gmail.com", "Klarna", 1000, 1),
(315, 77, "2020-12-21T13:15:35.391", "sar@gmail.com", "KreditKort", 500, 1),
(316, 77, "2017-12-21T13:17:03.676", "saran@gmail.com", "payPal", 500, 1),
(317, 77, "2017-12-21T13:23:06.176", "sarangua@gmail.com", "klarna", 199, 1),
(318, 77, "2021-04-24T13:24:55.004", "sofia@gmail.com", "payPal", 199, 1),
(319, 77, "2021-09-21T13:26:02.939", "sofia@gmail.com", "KreditKort", 129, 1),
(320, 77, "2017-12-21T13:32:04.227", "sar@gmail.com", "klarna", 404, 1),
(360, 77, "2018-01-08T11:51:58.798", "sofiamoberg@hotmail.com", "klarna", 556, 1),
(361, 77, "2021-10-08T11:52:04.174", "sofiamoberg@hotmail.com", "klarna", 556, 1);