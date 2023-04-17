package com.ldce.Model.Request;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.JpaSpecificationExecutor;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;

public interface RequestRepository extends JpaRepository<Request, Long>, JpaSpecificationExecutor<Request> {

	@Query("from Request where request_id=?1")
    Request findByrequest(long request_id);

	@Query(value = "SELECT * from request where type=:type AND request_enrollment=:enrollment", nativeQuery = true)
    Request findByReq(@Param("type") String type, @Param("enrollment") String enrollment);



	//public List<Request> findByApplied_dateAfterAndApplied_dateBefore(java.sql.Date start, java.sql.Date end);
	long countByStatus1(int status);

	long countByStatus2(int status);

	long countByStatus3(int status);
}
