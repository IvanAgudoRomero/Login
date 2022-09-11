package com.prueba.fullstack.login;

import org.springframework.stereotype.Service;

import java.util.ArrayList;
import java.util.List;
import java.util.stream.Collectors;

@Service
public class UserService {
    ArrayList<User> users = new ArrayList();

    public boolean isRegistered(User user){
        ArrayList aux;
        aux = (ArrayList) users.stream()
                .filter(i -> i.getUser().equals(user.getUser()))
                .collect(Collectors.toList());
        if(aux.isEmpty()){
            return false;
        }
        return true;
    }

    public boolean correctPassword(User user){
        ArrayList aux = new ArrayList();
        aux = (ArrayList) users.stream()
                .filter(i -> i.getUser().equals(user.getUser()))
                .collect(Collectors.toList());
        User user1 = (User) aux.get(0);
        if(user1.getPassword().equals(user.getPassword())){
            return true;
        }
        return false;
    }

    public String login(User user){
        if(isRegistered(user)){
            if(correctPassword(user)){
                return "piola";
            }
            return "wpass";
        }
        return "notReg";
    }

    public boolean register(User user){
        if(isRegistered(user)){
            return false;
        }
        users.add(user);
        return true;
    }

}
