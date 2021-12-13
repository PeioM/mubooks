package com.libumu.mubook;

import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.boot.autoconfigure.security.servlet.SecurityAutoConfiguration;

@SpringBootApplication
public class MubookApplication {

	public static void main(String[] args) {
		SpringApplication.run(MubookApplication.class, args);
	}

}
