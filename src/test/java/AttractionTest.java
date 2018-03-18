import co.romanianland2.Attraction;
import org.jboss.arquillian.container.test.api.Deployment;
import org.jboss.arquillian.junit.Arquillian;
import org.jboss.shrinkwrap.api.ShrinkWrap;
import org.jboss.shrinkwrap.api.asset.EmptyAsset;
import org.jboss.shrinkwrap.api.spec.JavaArchive;
import org.junit.runner.RunWith;

@RunWith(Arquillian.class)
public class AttractionTest {
    @Deployment
    public static JavaArchive createDeployment() {
        return ShrinkWrap.create(JavaArchive.class)
                .addClass(Attraction.class)
                .addAsManifestResource(EmptyAsset.INSTANCE, "beans.xml");
    }

    @org.junit.Test
    public void getId() {
    }

    @org.junit.Test
    public void setId() {
    }

    @org.junit.Test
    public void getName() {
    }

    @org.junit.Test
    public void setName() {
    }

    @org.junit.Test
    public void getAddress() {
    }

    @org.junit.Test
    public void setAddress() {
    }

    @org.junit.Test
    public void getLat() {
    }

    @org.junit.Test
    public void setLat() {
    }

    @org.junit.Test
    public void getLng() {
    }

    @org.junit.Test
    public void setLng() {
    }

    @org.junit.Test
    public void getType() {
    }

    @org.junit.Test
    public void setType() {
    }
}
