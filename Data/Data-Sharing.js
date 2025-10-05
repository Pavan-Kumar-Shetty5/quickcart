const shareData = document.getElementById('shareData');
        

        if (navigator.share) {
           shareData.style.display = 'block';
           console.log(' display button')
            
        } else {
           
    
            console.log("Dont  display button")
          
        }

        shareData.addEventListener('click', () => {
            try {
               
                const shareData = {
                    title: document.title,
                    text: 'QuickCart',
                    url: window.location.href
                };

               
                if (navigator.canShare && navigator.canShare(shareData)) {
                     navigator.share(shareData);
                     console.log('sharing is Support for this Data')
                  
                } else {
                    
                   
                    console.log('Sharing not supported for this data.');
                }
            } catch (err) {
            
               
                console.error('Error during share:', err);
            }
        });