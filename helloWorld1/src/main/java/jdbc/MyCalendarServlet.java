// 9월 5일 calendar 실습 servlet 
// fullcalaendar > selectable.html 파일에서 실습함
// memberManage에 풀캘린더 jdbc 연결됨 


package jdbc;

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

/**
 * Servlet implementation class MyCalendarServlet
 */

@WebServlet(asyncSupported = true, urlPatterns = { "/myCalendar" })
public class MyCalendarServlet extends HttpServlet {
	private static final long serialVersionUID = 1L;
       
    
    public MyCalendarServlet() {
        super();
        // TODO Auto-generated constructor stub
    }

	
	protected void doGet(HttpServletRequest request, HttpServletResponse response) throws ServletException, IOException {
		response.setContentType("text/json;charset=utf-8");
		
		MemberManage dao = MemberManage.getInstance();
		List<FullCalendar> list = dao.scheduleList();
		// [{"title" : "데이트", "start":"2022-09-05"},{},{} 
		
		JsonArray ary = new JsonArray();
		for(FullCalendar cal : list) {
			JsonObject obj = new JsonObject();
			obj.addProperty("title", cal.getTitle());
			obj.addProperty("start", cal.getStartDate());
			obj.addProperty("end", cal.getEndDate());
			ary.add(obj);
			
		}		

		Gson gson = new GsonBuilder().create(); // instance 생성 
		String json = gson.toJson(ary);			// toJson 메소드(cal)
		response.getWriter().print(json);		// 출력 스트림 => 웹에 출력
		
		
// 지정한 데이터 출력 잘되는지 보기 		
//		FullCalendar cal = new FullCalendar();
//		cal.setTitle("데이트");
//		cal.setStartDate("2022-09-05");
//		cal.setEndDate("2022-09-09");
		
//		Gson gson = new GsonBuilder().create(); // instance 생성 
//		String json = gson.toJson(cal);			// toJson 메소드(cal)
//		response.getWriter().print(json);		// 출력 스트림 => 웹에 출력
				
	}
	
	protected void doPost(HttpServletRequest request, HttpServletResponse response) throws ServletException, IOException {
		request.setCharacterEncoding("utf-8");
		
		String job = request.getParameter("job");
		
		if(job.equals("insert")) {		
		FullCalendar full = new FullCalendar();
		full.setTitle(request.getParameter("title"));
		full.setStartDate(request.getParameter("start"));
		full.setEndDate(request.getParameter("end"));
		
		MemberManage dao = MemberManage.getInstance();		
		if(dao.insertCalenedar(full)) {
			response.getWriter().print("success");
		} else {
			response.getWriter().print("fail");
		}
	}else if(job.equals("delete")) {
		// 삭제처리
		FullCalendar full = new FullCalendar();
		
		full.setTitle(request.getParameter("title"));
		
		MemberManage dao = MemberManage.getInstance();		
		if(dao.insertCalenedar(full)) {
			response.getWriter().print("success");
		} else {
			response.getWriter().print("fail");
		}
		
	}

	}
}
