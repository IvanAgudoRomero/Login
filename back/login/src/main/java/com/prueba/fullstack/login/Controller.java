package com.prueba.fullstack.login;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@CrossOrigin("*")
public class Controller {
    @Autowired
    UserService userService;

    @RequestMapping(method = RequestMethod.POST, value = "login")
    //@PostMapping("login")
    public String login(@RequestBody User user){
        System.out.println("login detectado");
        String res = userService.login(user);
        switch (res){
            case "piola":
                return "Sesión iniciada con éxito";
            case "wpass":
                return "Contraseña incorrecta";
            case "notReg":
                return "Usuario no registrado";
            default:
                System.out.println(user.toString());
                return "Bienvenido "+user.getUser();
        }
    }

    @PostMapping("register")
    public String register(@RequestBody User user){
        if(userService.register(user)){
            return "Usuario registrado con éxito";
        }
        return "El usuario ya esta registrado";
    }
/*
    @GetMapping("funciona")
    public String funciona(){
        return "funciona!";
    }
 */
}
