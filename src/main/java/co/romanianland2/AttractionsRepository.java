package co.romanianland2;

import org.springframework.stereotype.Component;

import java.util.concurrent.ConcurrentHashMap;

@Component
public class AttractionsRepository {

    public static final ConcurrentHashMap<Integer, Attraction> oneMap = new ConcurrentHashMap<Integer, Attraction>(300);

 public AttractionsRepository()
 {

 }
 public void addAttraction(Attraction attraction)
 {
     oneMap.putIfAbsent(attraction.getId(),attraction);
 }

}
