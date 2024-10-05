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
 
    if (window.innerWidth < 768) {
        $("#message").css('display','flex');
        $("#sub").css('display','none');
       $("#dynamicDropdown").css('display','none');
       $("#floatingPassword").css('display','none');
    } else {
        document.getElementById('message').style('display' , 'none');
        document.getElementById('sub').disabled = True;
    }
}

// เรียกฟังก์ชันเมื่อโหลดหน้าเว็บ


function printResult() {
    
    window.print(); // ใช้คำสั่ง print เพื่อพิมพ์เฉพาะส่วนผลลัพธ์
  }
