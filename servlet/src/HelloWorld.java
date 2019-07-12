
import javax.servlet.ServletConfig;
import javax.servlet.ServletException;
import javax.servlet.http.HttpServlet;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;
import java.io.IOException;

/**
 * @author neao
 */
public class HelloWorld extends HttpServlet {

    private String message;

    @Override
    public void init() throws ServletException {
        message = "hello world,my first servlet app";
    }

    @Override
    public void init(ServletConfig config) throws ServletException {
        message = "dddddd";
    }

    @Override
    protected void doGet(HttpServletRequest req, HttpServletResponse resp) throws ServletException, IOException {
        resp.setContentType("utf_8");

        resp.setContentType(message);
        System.out.println(message);
    }
}
