package co.romanianland2;

import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.EnableAutoConfiguration;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.ComponentScan;


@SpringBootApplication
@EnableAutoConfiguration
@ComponentScan
public class Application {

    @Bean
    Attraction attraction() {
        return new Attraction();
    }

   public static void main(String[] args)
   {
       SpringApplication.run(Application.class, args);
   }

}
