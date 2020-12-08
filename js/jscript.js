console.log('Work');

if (
  /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(
    navigator.userAgent
  )
) {
  // код для мобильных устройств
  const viber = document.querySelector('#viber');
  console.log('Mobila');
  viber.href = 'viber://add?number=380503283636';
} else {
  // код для обычных устройств
  console.log('PC');
}
