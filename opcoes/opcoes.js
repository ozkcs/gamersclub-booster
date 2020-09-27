function constructOptions() {
    let checkboxPreReady = document.getElementById('auto-aceitar-pre-ready');
    
    let checkboxCopiarIp = document.getElementById('auto-copiar-ip');

    let checkboxMedalhas = document.getElementById('auto-esconder-medalhas');
    
    let checkboxConquistas = document.getElementById('auto-esconder-conquistas');
    
    let checkboxEsconderChat = document.getElementById('auto-esconder-chat');

    let checkboxAutoConcordarTermosRanked = document.getElementById('auto-concordar-termos-ranked');

    let checkboxReady = document.getElementById('auto-aceitar-ready');

    chrome.storage.sync.get(null, function(result) {
        checkboxMedalhas.checked = result.autoEsconderMedalhas;
        checkboxConquistas.checked = result.autoEsconderConquistas;
        checkboxPreReady.checked = result.autoAceitarPreReady;
        checkboxCopiarIp.checked = result.autoCopiarIp;
        checkboxEsconderChat.checked = result.autoEsconderChat;
        checkboxAutoConcordarTermosRanked.checked = result.autoConcordarTermosRanked;
        checkboxReady.checked = result.autoAceitarReady;
    });

    checkboxConquistas.addEventListener('change', function(e) {
        chrome.storage.sync.set({autoEsconderConquistas: this.checked}, function() {});
    });

    checkboxMedalhas.addEventListener('change', function(e) {
        chrome.storage.sync.set({autoEsconderMedalhas: this.checked}, function() {});
    });

    checkboxPreReady.addEventListener('change', function(e) {
        chrome.storage.sync.set({autoAceitarPreReady: this.checked}, function() {});
    });

    checkboxCopiarIp.addEventListener('change', function(e) {
        chrome.storage.sync.set({autoCopiarIp: this.checked}, function() {});
    });

    checkboxEsconderChat.addEventListener('change', function(e) {
        chrome.storage.sync.set({autoEsconderChat: this.checked}, function() {});
    });

    checkboxAutoConcordarTermosRanked.addEventListener('change', function(e) {
        chrome.storage.sync.set({autoConcordarTermosRanked: this.checked}, function() {});
    });

    checkboxReady.addEventListener('change', function(e) {
        chrome.storage.sync.set({autoAceitarReady: this.checked}, function() {});
    });
}
constructOptions();