package co.romanianland2;

import java.sql.*;
import java.util.concurrent.ConcurrentHashMap;

//This class is used to open db connection and retrieve results from DB

public class DatabaseConnection {

    //driver and database URL
    static final String JDBC_DRIVER = "com.mysql.jdbc.Driver";
    static final String DB_URL = "jdbc:mysql://localhost:3306/mysql";

    //credentials- don't commit them;
    static final String USER = "root";
    static final String PASS = "MyNewPass";
   static ConcurrentHashMap<Integer,Attraction> attractionsMap = new ConcurrentHashMap<Integer, Attraction>();

    public static void main(String[] args)
    {
        Connection connection = null;
        Statement statement = null;
        try {
            Class.forName("com.mysql.jdbc.Driver");

            //Open a connection
            System.out.println("Connecting to database: ");
            connection = DriverManager.getConnection(DB_URL,USER,PASS);

            //Execute query
            System.out.println("Creating a statement: ");
            statement = connection.createStatement();
            String sql;
            sql="SELECT * FROM markers";
            ResultSet resultSet = statement.executeQuery(sql);


            //Extract data from result set
            while(resultSet.next()) {
                //Retrieve by column name
                int id = resultSet.getInt("id");
                String name = resultSet.getString("name");
                String address = resultSet.getString("address");
                double lat = resultSet.getDouble("lat");
                double lng = resultSet.getDouble("lng");
                String type = resultSet.getString("type");

                //Display values
                System.out.println("Id: " + id);
                System.out.println("Name: " + name);
                System.out.println("Address:" + address);
                System.out.println("Latitude: " + lat);
                System.out.println("Longitude: " + lng);
                System.out.println("Type: " + type);

                Attraction attractionDetails = new Attraction();
                attractionDetails.setId(id);
                attractionDetails.setName(name);
                attractionDetails.setAddress(address);
                attractionDetails.setLat(lat);
                attractionDetails.setLng(lng);
                attractionDetails.setType(type);

                attractionsMap.put((Integer) attractionDetails.getId(), attractionDetails);
                    //store data in a data structure X
                //in the Attractions controller, POST data to endpoint x
                //javascript get data from endpoint, parse it and populate with markers




                //Clean up environment
                //resultSet.close();
               // statement.close();
               // connection.close();
            }

        } catch (ClassNotFoundException e) {
            e.printStackTrace();
        } catch (SQLException e) {
            e.printStackTrace();
        } finally {

            try {
                if(statement!=null)
                    statement.close();
            } catch (SQLException se2) {}

            try {
                if (connection!=null)
                {
                    connection.close();
                }

            } catch (SQLException se) {
                se.printStackTrace();
            }

        }
        System.out.println("Goodbye");
        System.out.println(attractionsMap);
    }

}
