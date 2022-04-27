import React, { useState } from 'react';
import PageTitle from '../widgets/PageTitle';

function About() {


    return ( 
        <div id="eskimo-site-wrapper">
			<PageTitle title = "About" />

			<div className="AboutContainer">
                <h5 className="eskimo-title-with-border"><span>Who Are We</span></h5>
                <div className = " AboutCtsBox1 ">
                    <h3>Project Name</h3>
                    <p>Outstagram</p>
                    <h3>Members</h3>
                    <div className ="row Members">
                        <div className ="col">Kim<br/>Hyeong<br/>Dong</div>
                        <div className ="col">Kang<br/>Yeong<br/>Jae</div>
                        <div className ="col">Jeong<br/>Dong<br/>Hyeon</div>
                        <div className ="col">Yoo<br/>So<br/>Young</div>
                    </div>
                </div>
                <h5 className="eskimo-title-with-border"><span>What We Make</span></h5>
                <div className = " AboutCtsBox2 ">
                    <p className ="Title">Blog 스타일과 SNS의 Community를 접목한</p>
                    <p className ="Title">Hybrid 형태의 Social Network</p> 
                </div>
                <h5 className="eskimo-title-with-border"><span>Available Function</span></h5>
                <div className = " AboutCtsBox2 ">
                    <h5 className ="eskimo-title-with-border"><span>Post</span></h5>
                        <p className="Details">게시글 작성/수정/삭제</p>
                        <p className="Details">게시글 카테고리 추가/삭제</p>
                        <p className="Details">게시/수정 날짜 자동 업데이트</p>
                        <p className="Details">게시글 태그 추가/삭제</p>
                    <h5 className ="eskimo-title-with-border"><span>Comments</span></h5>
                        <p className="Details">댓글 작성/삭제</p>
                    <h5 className ="eskimo-title-with-border"><span>Search</span></h5>
                        <p className="Details">작성자의 모든 게시글 검색</p>
                    <h5 className ="eskimo-title-with-border"><span>View</span></h5>
                        <p className="Details">이미지 요약보기</p>
                        <p className="Details">좋아요 상위랭크 노출</p>

                    
                </div>
			</div>
		</div>
     );
}

export default About;