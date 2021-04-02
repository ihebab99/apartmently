package com.jgajzler.apartmently.controller;

import com.jgajzler.apartmently.dto.AddressDto;
import com.jgajzler.apartmently.service.AddressService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
@RequestMapping(path = "api/address")
public class AddressController {
    private final AddressService addressService;

    @Autowired
    public AddressController(AddressService addressService) {
        this.addressService = addressService;
    }

    @GetMapping(path = "ad/{adId}")
    public AddressDto getAddressByAdId(@PathVariable("adId") Long id) {
        return addressService.getAddressByAdId(id);
    }

}
