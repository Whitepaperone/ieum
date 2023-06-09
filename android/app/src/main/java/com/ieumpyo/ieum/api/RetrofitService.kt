package com.ieumpyo.ieum.api

import Pins
import PinDetail
import retrofit2.Call
import retrofit2.http.GET
import retrofit2.http.Header
import retrofit2.http.Path

interface RetrofitService {


    @GET("pins/user")
    fun getPinAll(@Header("Authorization")token:String): Call<Pins>

    @GET("pins/alarm/{pin_id}")
    fun getPinDetail(@Header("Authorization")token: String, @Path("pin_id")id:Int): Call<PinDetail>

//
//    @GET("groups/{group_id}")
//    fun getGroupAll(@Header("Authorization")token:String, @Path("group_id") id:Int): Call<Result.ResponseGroup>
}