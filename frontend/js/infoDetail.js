window.onload = () => {
  //axios로 값을 get해서
  // 가져온 데이터를 렌더
  // const {data} = axios.get("URL주소");
  // const wrap = document.querySelector(".top");
  // const div = document.createElement("div");
  // wrap.append(div)
  get();
}

const btnWr = document.querySelector(".btn-wr");

async function get() {
  try {
    const frameWriting = document.querySelector(".frameWriting");
    const inn = document.querySelector(".in");
    const tokenResponse = await axios.get('http://localhost:3000/information/token', { withCredentials: true });
    const response = await axios.get("http://localhost:3000/information", { withCredentials: true });
    const resp = response.data;

    console.log(resp);
    console.log(tokenResponse.data.isAdmin)


    const limitedResp = resp.slice(0, 3);

    // 가져온 데이터를 렌더링
    limitedResp.forEach((e, index) => {
      const divv = document.createElement("div");
      divv.innerHTML = `    
      <figure class="snip1283">
      <img src="http://localhost:3000/${e.img}"data-set="${e.id}" alt="sample70">
      <figcaption>
      ${e.w_info}
      </figcaption>
      </figure> 
      <div class="buttons">
      <button id="ubutton" class="ubutton hide" data-set="${e.id}">correction</button>
      <button class="dibuttn hide" data-set="${e.id}">delete</button>
      </div>`


      //     <div class="buttons">
      //     <button id="ubutton" data-set="1">수정버튼</button>
      //     <button class="dibuttn">삭제버튼</button>
      // </div>
      inn.append(divv);
      const updateButtons = document.querySelectorAll('.ubutton');
      const deleteButtons = document.querySelectorAll('.dibuttn');
      const buttonData = document.querySelectorAll('.buttons');
      console.log(buttonData)
      if (tokenResponse.data.isAdmin === true) {
        updateButtons[index].classList.remove('hide');
        deleteButtons[index].classList.remove('hide');
        btnWr.classList.remove('hide');
      }


      // <h3>싱글몰트 위스키 마니아들을 위한-위스키 용어편</h3>
      // <p>지난해 맥캘란 페이스북을 통해 많은 팬들에게 위스키 용어 및 위스키 상식들을 소개한 바 있다. </p>
      // <img src="./2enProject_Main_imges/토치로불하는_위스키.webp" alt="sample70"/>
    });

    const updateButtons = document.querySelectorAll('.ubutton');
    const deleteButtons = document.querySelectorAll('.dibuttn');

    // 수정 버튼 이벤트 리스너
    updateButtons.forEach(button => {
      button.addEventListener('click', (e) => {
        location.href = `./infoU.html?id=${e.target.dataset.set}`;
      });
    });

    // 삭제 버튼 이벤트 리스너
    deleteButtons.forEach(button => {
      button.addEventListener('click', async (e) => {

        try {
          // DELETE 요청 보내기
          const id = e.target.dataset.set;
          const response = await axios.delete(`http://localhost:3000/information/delete/${id}`);
          window.location.reload();

          // UI에서 해당 항목 제거
          e.target.closest('.buttons').parentElement.remove(); // 삭제 버튼이 포함된 div를 제거
        } catch (error) {
          console.error("삭제 중 오류 발생:", error);
        }
      });
    });









  } catch (error) {
    console.error("get 에러났어:", error);  // 에러 메시지를 로그로 출력
  }
  const test = document.querySelectorAll('#ubutton')

  for (let i = 0; i < test.length; i++) {
    test[i].addEventListener('click', (e) => {
      location.href = `./infoU.html?id=${e.target.dataset.set}`
    })
  }
}

btnWr.addEventListener("click", (e) => {
  e.preventDefault();
  window.location.href = "infoRead.html"
})