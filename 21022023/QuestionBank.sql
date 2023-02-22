create database quiz;
use quiz;
create table User(
user_id int auto_increment primary key,
username varchar(56)
);

create table QuestionBank(
id int auto_increment primary key,
name varchar(56)
);

create table Question(
id int auto_increment primary key,
question_bank_id int ,
question_text varchar(256),
foreign key(question_bank_id)references QuestionBank(id)
);
 
create table Options(
option_id int auto_increment primary key,
question_id int,
option_text varchar(256),
foreign key(question_id) references Question(id));

create table Answer(
id int primary key auto_increment,
question_id int,
option_id int,
is_correct boolean,
foreign key(question_id)references Question(id),
foreign key(option_id)references Options(option_id));

create table User_QuestionBank(
id int auto_increment primary key,
user_id int,
question_bank_id int,
foreign key(user_id)references User(user_id),
foreign key(question_bank_id) references QuestionBank(id)
)

