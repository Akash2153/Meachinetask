
        document.getElementById('simpleForm').addEventListener('submit', function(e) {
            e.preventDefault();
            
            const name = document.getElementById('name').value;
            const rank = document.getElementById('rank').value;
            const idNumber = document.getElementById('idNumber').value;

            document.getElementById('idDisplay').textContent = `ID: ${idNumber}`;
            document.getElementById('nameDisplay').textContent = `User Name: [${name}]`;
            document.getElementById('congratsMessage').innerHTML = `Congratulations!! You have secured <strong>${rank}</strong>`;
        });

        document.getElementById('photo').addEventListener('change', function(e) {
            const file = e.target.files[0];
            if (file) {
                const reader = new FileReader();
                reader.onload = function(e) {
                    document.getElementById('photoPreview').innerHTML = `<img src="${e.target.result}" alt="User Photo" style="width: 100%; height: 100%; object-fit: cover;">`;
                }
                reader.readAsDataURL(file);
            }
        });
    