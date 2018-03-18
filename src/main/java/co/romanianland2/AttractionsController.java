package co.romanianland2;


import javafx.scene.chart.PieChart;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.MediaType;
import org.springframework.web.bind.annotation.*;

import java.awt.*;
import java.util.concurrent.ConcurrentHashMap;

@RestController
public class AttractionsController {

    //This is the request handler, fetching data and posting data to specific endpoints

    public AttractionsController()
    {

    }

    @RequestMapping(value ="/attractions", method = RequestMethod.GET)
    @ResponseBody
    public ConcurrentHashMap<Integer, Attraction> getAttractions()
    {
        return DatabaseConnection.attractionsMap;
    }

    @RequestMapping(value="/attractions",method = RequestMethod.POST, consumes = MediaType.APPLICATION_JSON_VALUE)
    public Attraction postAttraction(@RequestBody Attraction attraction)
    {
        return DatabaseConnection.attractionsMap.put(attraction.getId(), attraction);
    }

}
