package com.java_app.game_community.repository;

import com.java_app.game_community.entity.User;
import org.springframework.data.repository.CrudRepository;

public interface UserRepository extends CrudRepository<User, Integer> {

}
