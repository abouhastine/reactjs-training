package org.training.project.taskmanager.dto.validation;

import java.lang.annotation.Documented;
import java.lang.annotation.ElementType;
import java.lang.annotation.Retention;
import java.lang.annotation.RetentionPolicy;
import java.lang.annotation.Target;
import javax.validation.Constraint;
import javax.validation.Payload;

@Target({ElementType.TYPE})
@Retention(RetentionPolicy.RUNTIME)
@Documented
@Constraint(validatedBy = {ScheduledTaskValidator.class})
@SuppressWarnings(value = "unused")
public @interface Scheduled {

  String message() default "Tasks scheduled in the future must not be set to done";

  Class<?>[] groups() default {};

  Class<? extends Payload>[] payload() default {};
}
