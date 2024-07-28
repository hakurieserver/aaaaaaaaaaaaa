const terminalOutput = document.getElementById('terminal-output');
const commandInput = document.getElementById('command-input');

commandInput.addEventListener('keypress', function(event) {
    if (event.key === 'Enter') {
        executeCommand(commandInput.value);
        commandInput.value = '';
    }
});

function executeCommand(command) {
    if (command === 'about') {
        terminalOutput.innerHTML += "<div>SayoTerminal-SayoBot2.7</div>";
        terminalOutput.innerHTML += "<div>Được xây dựng bới HakurieProject</div>";
        terminalOutput.innerHTML += "<div>OS: Windows Server 2022</div>";
        terminalOutput.innerHTML += "<div>Nhập help để có danh sách các lệnh có sẵn.</div>";
    } else if (command === 'update') {
        terminalOutput.innerHTML += "<div>SayoTerminal-SayoBot Update and Maintained</div>";
        terminalOutput.innerHTML += "<div>[Sayo2.7] - Đây đã là phiên bản mới nhất</div>";
    } else if (command === 'login') {
        terminalOutput.innerHTML += "<div>Bạn không có quyền Đăng Nhập vào Sayo và Database của Hakurie:( </div>";
        terminalOutput.innerHTML += "<div>Hãy thử liên lạc với Kochiwa hoặc Mikan để được trợ giúp</div>";
    } else if (command === 'infer') {
        terminalOutput.innerHTML += "<div> SayoBot v2.7 (info)</div>";
        terminalOutput.innerHTML += "<div> CPU: Intel® Xeon® Gold 5220 2.2GHz (2 cái)</div>";
        terminalOutput.innerHTML += "<div> MotherBoard: FUJITSU Primergy RX2540 M1</div>";
        terminalOutput.innerHTML += "<div> Ram: Crucial 32GB-4800 (16 cái)</div>";
        terminalOutput.innerHTML += "<div> GPU: NVIDIA Quadro RTX 6000 6GB (3 cái)</div>";
        terminalOutput.innerHTML += "<div> OS: Windows Server 2022</div>";
        terminalOutput.innerHTML += "<div>     Fedora Server 40</div>";
        terminalOutput.innerHTML += "<div>     Fedora Workstation 40</div>";
        terminalOutput.innerHTML += "<div> Disk: Micron 9300 Pro 3TB NVMe U.2 (15 cái)</div>";
        terminalOutput.innerHTML += "<div> TPM: 2.0</div>";
        terminalOutput.innerHTML += "<div> Sub-GPU: NVIDIA® RTX 3080 Ti™ - 12GB GDDR6X</div>";
        terminalOutput.innerHTML += "<div> Sub-GPU: NVIDIA® RTX® 4060 Ti - 16GB GDDR6X</div>";
        terminalOutput.innerHTML += "<div> Sub-CPU: Intel® Core™ i9 processor 14900KF</div>";
        terminalOutput.innerHTML += "<div> Sub-CPU: Intel® Core™ i9 processor 14900KS</div>";
        terminalOutput.innerHTML += "<div>    </div>";
        terminalOutput.innerHTML += "<div> (c)HakurieProject .All rights reserved</div>";
    } else if (command === 'help') {
        terminalOutput.innerHTML += "<div>Danh sách các lệnh có sẵn:</div>";
        terminalOutput.innerHTML += "<div>-about</div>";
        terminalOutput.innerHTML += "<div>-help</div>";
        terminalOutput.innerHTML += "<div>-login</div>";
        terminalOutput.innerHTML += "<div>-infer</div>";
        terminalOutput.innerHTML += "<div>-update</div>";
        terminalOutput.innerHTML += "<div>-calc</div>";
        terminalOutput.innerHTML += "<div>-buildweb</div>";
        terminalOutput.innerHTML += "<div>-status</div>";
        terminalOutput.innerHTML += "<div>-winver</div>";
        terminalOutput.innerHTML += "<div>-uac</div>";
        terminalOutput.innerHTML += "<div>-chklock</div>";
        terminalOutput.innerHTML += "<div>-getkeyhaku</div>";
        terminalOutput.innerHTML += "<div>-cerificate</div>";
        terminalOutput.innerHTML += "<div>-os</div>";
        terminalOutput.innerHTML += "<div>-browser</div>";
    } else if (command === 'chklock') {
        terminalOutput.innerHTML += "<div>LockerLogin: ON</div>";
    } else if (command === 'uac') {
        terminalOutput.innerHTML += "<div>User Account Control (UAC): Default User</div>";
    } else if (command === 'winver') {
        terminalOutput.innerHTML += "<div>Windows Server 2022</div>";
        terminalOutput.innerHTML += "<div>Windows is activated with a digital license linked to Hakurie Microsoft account</div>";
    } else if (command.startsWith('status')) {
        const link = command.substring(6).trim();
        if (link === '') {
            terminalOutput.innerHTML += "<div>Xem tình trạng của máy chủ Hakurie: hakurieprojectloved.web.app/status/index.html</div>";
        }
    } else if (command === 'buildweb') {
        terminalOutput.innerHTML += "<div>Bạn muốn build web và sử dụng dịch vụ của Hakurie?</div>";
        terminalOutput.innerHTML += "<div>Hãy thử liên lạc với Kochiwa hoặc Mikan để được trợ giúp:) </div>";
    } else if (command === 'cerificate') {
        terminalOutput.innerHTML += "<div>Google Trust Services LLC</div>";
    } else if (command === 'getkeyhaku') {
        terminalOutput.innerHTML += "<div>cdd41d2ef4b1c7e871b0a25260a35f57f5d1e53bed9366ee52c4b9f626851f3e</div>";
    } else if (command.startsWith('calc')) {
        const expression = command.substring(6).trim();
        if (expression === '') {
            terminalOutput.innerHTML += "<div>Vui lòng cung cấp một biểu thức toán học.</div>";
        } else {
            try {
                const result = eval(expression);
                terminalOutput.innerHTML += `<div>${expression} = ${result}</div>`;
            } catch (error) {
                terminalOutput.innerHTML += "<div>Biểu thức không hợp lệ.</div>";
            }
        }
    } else if (command === 'os') {
        showOperatingSystem();
    } else if (command === 'browser') {
        showBrowser();
    }
}

function showOperatingSystem() {
    const operatingSystem = navigator.platform;
    terminalOutput.innerHTML += `<div>Operating System: ${operatingSystem}</div>`;
}

function showBrowser() {
    const userAgent = navigator.userAgent;
    const browserName = getUserBrowser(userAgent);
    terminalOutput.innerHTML += `<div>Browser: ${browserName}</div>`;
}

function getUserBrowser(userAgent) {
    if (userAgent.indexOf("Chrome") !== -1) return "Google Chrome";
    else if (userAgent.indexOf("Firefox") !== -1) return "Mozilla Firefox";
    else if (userAgent.indexOf("Safari") !== -1) return "Safari";
    else if (userAgent.indexOf("MSIE") !== -1 || userAgent.indexOf("Trident/") !== -1) return "Internet Explorer";
    else return "Unknown Browser";
}


