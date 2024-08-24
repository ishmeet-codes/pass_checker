document.getElementById('password').addEventListener('input', function() {
    const password = this.value;
    const strengthMessage = document.getElementById('strengthMessage');
    const strength = checkPasswordStrength(password);
    
    strengthMessage.textContent = strength.message;
    strengthMessage.className = 'strength ' + strength.className;
});

function checkPasswordStrength(password) {
    let strength = { message: 'Very Weak', className: 'weak' };

    if (password.length >= 8) {
        let criteriaMet = 0;
        if (/[a-z]/.test(password)) criteriaMet++;
        if (/[A-Z]/.test(password)) criteriaMet++;
        if (/[0-9]/.test(password)) criteriaMet++;
        if (/[^a-zA-Z0-9]/.test(password)) criteriaMet++;
        
        switch (criteriaMet) {
            case 1:
                strength = { message: 'Weak', className: 'weak' };
                break;
            case 2:
                strength = { message: 'Medium', className: 'medium' };
                break;
            case 3:
                strength = { message: 'Strong', className: 'strong' };
                break;
            case 4:
                strength = { message: 'Very Strong', className: 'strong' };
                break;
        }
    } else {
        strength = { message: 'Too Short', className: 'weak' };
    }

    return strength;
}
