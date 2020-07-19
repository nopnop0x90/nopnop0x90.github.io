$(()=>
{
  let i = 0;
  const NUM_SECTIONS = 10;
  let h = document.createElement('h2');
  while (i < NUM_SECTIONS)
  {
    i++;
    h.innerText = 'section ' + i;
    document.body.append(h);
    h = document.createElement('h2');
  }
});
