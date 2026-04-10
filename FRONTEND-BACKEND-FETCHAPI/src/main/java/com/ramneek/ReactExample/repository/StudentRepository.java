package com.ramneek.ReactExample.repository;


	import org.springframework.data.jpa.repository.JpaRepository;

import com.ramneek.ReactExample.model.Student;



	public interface StudentRepository extends JpaRepository<Student,Integer>{
	}

