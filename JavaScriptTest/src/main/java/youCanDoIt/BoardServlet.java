package youCanDoIt;

import java.io.IOException;

import java.util.List;	

import javax.servlet.ServletException;
import javax.servlet.annotation.WebServlet;
import javax.servlet.http.HttpServlet;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;

import com.google.gson.Gson;
import com.google.gson.GsonBuilder;
import com.google.gson.JsonArray;
import com.google.gson.JsonObject;



@WebServlet("/board")
public class BoardServlet extends HttpServlet {
	private static final long serialVersionUID = 1L;

	public BoardServlet() {
		super();
	}

	protected void doGet(HttpServletRequest request, HttpServletResponse response)
			throws ServletException, IOException {
		
		// 조회의 기능 구현.(do get)
		response.setContentType("text/json;charset=utf-8");
		
		BoardDAO board = new BoardDAO();
		List<Board> list = board.getBoardList();
		
		
		JsonArray ary = new JsonArray();
		for(Board bd : list) {
			JsonObject obj = new JsonObject();
			obj.addProperty("bno", bd.getBno());
			obj.addProperty("title", bd.getTitle());
			obj.addProperty("writer", bd.getWriter());
			obj.addProperty("create_date", bd.getCreationDate());
			ary.add(obj);
			
		}		

		Gson gson = new GsonBuilder().create(); // instance 생성 
		String json = gson.toJson(ary);			// toJson 메소드(cal)
		response.getWriter().print(json);	
		
		
		
		
	}

	protected void doPost(HttpServletRequest request, HttpServletResponse response)
			throws ServletException, IOException {
		request.setCharacterEncoding("utf-8");
		response.setContentType("text/json;charset=utf-8");
		response.setCharacterEncoding("utf-8");

		// 추가, 삭제의 기능을 구현. (do post)
request.setCharacterEncoding("utf-8");
		
		String job = request.getParameter("job");
		
		if(job.equals("insert")) {		
			Board bd = new Board();
			bd.setTitle(request.getParameter("title"));
			bd.setWriter(request.getParameter("writer"));
			bd.setCreationDate(request.getParameter("create_date"));
			
			BoardDAO board = new BoardDAO();
			if(board.insertBoard(bd)) {
				response.getWriter().print("success");
			} else {
				response.getWriter().print("fail");	
			}
			
		} else if(job.equals("delete")) {
			
			Board bd = new Board();			
			bd.setBno(Integer.parseInt(request.getParameter("bno")));
			BoardDAO board = new BoardDAO();			
			
			if(board.deleteBoard(0)) {
				response.getWriter().print("success");
			} else {
				response.getWriter().print("fail");	
			}
		}

	}
}
