create database P_School;
use P_School;
create table teachers(
ID_T int primary key,
fname varchar(30) not null,
lname varchar(30) not null,
zip_code varchar(20),
street varchar(30),
city varchar(30) not null,
Birt_hdate date,
specializ varchar(30) not null,
salary decimal(7,2)not null,
sex varchar(10),
code_subj int,
constraint subject_fk foreign key(code_subj)references subjects(code)
);
use P_School;
create table subjects(
code int primary key,
name varchar(40) not null,
level int not null
);
use P_School;
create table phone_teach(
phone varchar(30),
Id_teach int,
constraint phont_teacher_fk foreign key(Id_teach )references teachers(ID_T)
);
use P_School;
create table class(
code int primary key,
Location varchar(30),
);
create table student(
ID_st int primary key,
fname varchar(30) not null,
lname varchar(30) not null,
zip_code varchar(20),
street varchar(30),
city varchar(30) not null,
Birt_hdate date,
num_cl int,
constraint student_class_fk foreign key(num_cl)references class(code)
);
create table parent(
fname varchar(30),
lname varchar(30),
zip_code varchar(20),
street varchar(30),
city varchar(30) not null,
Birt_hdate date,
ID_stu int,
constraint student_parent_fk foreign key(ID_stu)references student(ID_st)
);
create table study(
code_sub int,
constraint subjects_fk foreign key(code_sub)references subjects(code),
ID_st int,
constraint study_fk foreign key(code_sub)references student(ID_st),
hours int
);
create table teaches(
num_cla int,
constraint class_fk foreign key(num_cla)references class(code),
ID_teach int,
constraint teachers_fk foreign key(ID_teach)references teachers(ID_T)
);
create table st(
num_class int,
constraint class_st_fk foreign key(num_class)references class(code),
code_sub int,
constraint subjects_st_fk foreign key(code_sub)references subjects(code)
);
use P_School;
insert into teachers values(2,'mohamed','altaf','A20','Algam','manfalut','2000-12-2','Arabic',20000.23,'male',12);
insert into teachers values(1,'Rania','Rrfeet','B12','AA12','tema','2001-9-1','English',10000.23,'female',13);
insert into teachers values(3,'mohamed','helmy','C13','w11','Assuit','2001-9-10','sciences',1000.23,'male',14);
insert into teachers values(4,'Ahamed','mohamed','v13','w10','Assuit','2001-9-10','Geography',2000.23,'male',15);
insert into teachers values(5,'mohamed','ali','a13','w12','Assuit','2001-10-10','history',3000.23,'male',16);
insert into teachers values(6,'ali','mohamed','s13','c13','Assuit','2001-11-10','algebra',4000.23,'male',17);
insert into teachers values(7,'helmy','mohamed','d13','d13','Assuit','2001-12-10','biology',5000.23,'male',18);
insert into teachers values(8,'sara','mohamed','b32','s10','Assuit','2001-3-10','physics',6000.23,'famale',19);
insert into teachers values(9,'mahmoud','mohamed','t13','h10','Assuit','2001-9-10','chemistry',7000.23,'male',20);
insert into subjects values(12,'Arabic',2);
insert into subjects values(13,'English',2);
insert into subjects values(14,'sciences',1);
insert into subjects values(15,'Geography',2);
insert into subjects values(16,'history',3);
insert into subjects values(17,'algebra',2);
insert into subjects values(18,'biology',4);
insert into subjects values(19,'physics',1);
insert into subjects values(20,'chemistry',2);
insert into class values(1,'first floor');
insert into class values(2,'second floor');
insert into class values(3,'first floor');
insert into class values(4,'third floor');
insert into class values(5,'fourth floor');
insert into class values(6,'fifth floor');
insert into class values(7,'fifth floor');
insert into student values(190007,'mohamed','Ali','A20','Algam','manfalut','2002-12-2',1);
insert into student values(1900777,'Rania','khaled','B12','AA12','tema','2003-9-1',1);
insert into student values(190001,'mohamed','gmal','C13','w11','Assuit','2004-9-10',2);
insert into student values(180110,'Ahamed','mohamed','v13','w10','Assuit','2005-9-10',3);
insert into student values(198178,'mohamed','Ali','a13','w12','Assuit','2006-10-10',4);
insert into student values(190011,'ali','mohamed','s13','c13','Assuit','2007-11-10',4);
insert into student values(190016,'helmy','mohamed','d13','d13','Assuit','2008-12-10',1);
insert into student values(190012,'sara','mohamed','b32','s10','Assuit','2005-3-10',4);
insert into student values(1900919,'mahmoud','mohamed','t13','h10','Assuit','2004-9-10',5);
insert into parent values('mahmoud','mohamed','t13','h10','Assuit','1995-9-10',190007);
insert into parent values('Ahamed','Ali','t13','h13','Assuit','1990-9-10',180110);
insert into parent values('helmy','ali','m43','m40','Assuit','1992-9-10',19-0012);
insert into parent values('mahmoud','mohamed','u13','h10','Assuit','1993-9-10',190007);
insert into parent values('ali','mohamed','a13','i10','Assuit','1990-9-10',19-0016);
insert into parent values('khaled','mohamed','m13','h10','Assuit','1990-9-10',19-0016);
