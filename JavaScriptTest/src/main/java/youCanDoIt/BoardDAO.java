package youCanDoIt;

import java.sql.Date;
import java.sql.SQLException;
import java.util.ArrayList;
import java.util.List;

public class BoardDAO extends DAO {

	public List<Board> getBoardList() {
		
		List<Board> board = new ArrayList<>();
		String sql = "select * from tbl_board";
		try {
			pstmt = conn.prepareStatement(sql);
			rs = pstmt.executeQuery();
			while(rs.next()) {
				Board bd = new Board();
				bd.setBno(rs.getInt("bno"));
				bd.setTitle(rs.getString("title"));
				bd.setContent(rs.getString("writer"));
				bd.setCreationDate(rs.getString("creation_date"));
				board.add(bd);
			}
		} catch (SQLException e) {
			e.printStackTrace();
		}finally {
			disconnect();
		}
		return board;
	}

	public boolean deleteBoard(int bno) {
		String sql = "delete from tbl_board where bno = ?";
		conn();
		try {
			pstmt = conn.prepareStatement(sql);
			pstmt.setInt(1, bno);			
			int r = pstmt.executeUpdate();
			if(r>0) 
				return true;	
			
		} catch (SQLException e) {			
			e.printStackTrace();
		}finally {
			disconnect();
		}	

		return false;
	}

	public boolean insertBoard(Board board) {
		String sql = "insert into tbl_board (bno, title, content, writer, creation_date) values(seq_board.nextval, ?, ?, ?, ?)";
		conn();
		try {
			pstmt = conn.prepareStatement(sql);		
			pstmt.setString(1, board.getTitle());
			pstmt.setString(2, board.getContent());
			pstmt.setString(3, board.getWriter());
			pstmt.setString(4, board.getCreationDate());		
			
			int r = pstmt.executeUpdate();
			if(r>0) 
				return true;	
			
		} catch (SQLException e) {		
			e.printStackTrace();
		} finally {
			disconnect();
		}
		return false;
	}
}
