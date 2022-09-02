package jdbc;

import java.io.IOException;
import javax.servlet.ServletException;
import javax.servlet.annotation.WebServlet;
import javax.servlet.http.HttpServlet;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;

/**
 * Servlet implementation class AddMemberServlet
 */
@WebServlet("/addMemberServlet")
public class AddMemberServlet extends HttpServlet {
	private static final long serialVersionUID = 1L;
       
    /**
     * @see HttpServlet#HttpServlet()
     */
    public AddMemberServlet() {
        super();
        // TODO Auto-generated constructor stub
    }

	/**
	 * @see HttpServlet#doGet(HttpServletRequest request, HttpServletResponse response)
	 */
	protected void doGet(HttpServletRequest request, HttpServletResponse response) throws ServletException, IOException {
		// TODO Auto-generated method stub
		response.getWriter().append("Served at: ").append(request.getContextPath());
	}


	protected void doPost(HttpServletRequest request, HttpServletResponse response) throws ServletException, IOException {
		//요청 정보 param.
		request.setCharacterEncoding("utf-8");
		response.setContentType("text/json;charset=utf-8");
		
		// 한글처리.
		String id = request.getParameter("mid");
		String pw = request.getParameter("mps");
		String nm = request.getParameter("mnm");
		
		Member member = new Member();
		member.setMemberId(id);
		member.setMemberPw(pw);
		member.setMemberName(nm);
		
		MemberManage dao  = MemberManage.getInstance();
		int addCnt = dao.registCustomer(member);
		
		// 처리결과를 ajax 호출한 페이지로 반환.
		if(addCnt == 1) {
			//retCode = return Code 의미 
		    String json = "{\"retCode\": \"success\", \"memberId\": \""+ id +"\", \"memberPw\": "+ pw +", \"memberName\": \""+nm+"\"}";
			response.getWriter().print(json);
		} else {
			String json = "{\"retCode\": \"fail\"}";
			response.getWriter().print(json);
		}
	}

}
