const apiKey = 'AIzaSyB42FEfQ7FBJdraDbAqBB3KdG_Nt0-I4tU';
const spreadsheetId = '1Vlbfxl6aQq9FOBiM2RyoFLIo5L0lOwCaQogrG4nxj8A';
const rangesheet1 = 'Main!A3:ZZ'; 
const rangesheet2 = 'Outlab!A2:ZZ';
const rangesheet3 = 'customer!B2:C'

function updateDateTime() {
    const now = new Date();
    const date = now.toLocaleDateString('th-TH');
    const time = now.toLocaleTimeString('th-TH');
    document.getElementById('datetime').innerHTML = `${date} ${time}`;
}

// เรียกฟังก์ชันทุกวินาทีเพื่ออัปเดตวันที่และเวลา
setInterval(updateDateTime, 1000);

// เรียกฟังก์ชันเมื่อโหลดหน้าเว็บ
updateDateTime();


function checkScreenSize() {
   const message = document.getElementById('message');
    if (window.innerWidth < 500) {
        message.innerHTML+=  
        `<div class="modalrecieve" style="display: flex;">
       
            <h1 class="text-danger ms-5 fs-6 fw-bold">Please reverse your device to landscape</h1>
            <div class="icon-spin">
              <i class="fa-solid fa-repeat fa-spin"></i>
           </div>
          </div>`;

        document.getElementById('message').style.display = 'block';
    } else {
        document.getElementById('message').style.display = 'none';
    }
}

// เรียกฟังก์ชันเมื่อโหลดหน้าเว็บ


function printResult() {
    
    window.print(); // ใช้คำสั่ง print เพื่อพิมพ์เฉพาะส่วนผลลัพธ์
  }
