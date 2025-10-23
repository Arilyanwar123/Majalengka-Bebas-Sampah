document.addEventListener('DOMContentLoaded',()=>{
  const ctx=document.getElementById('chart-1');
  if(!ctx||!window.Chart) return;
  const data={
    labels:['2019','2020','2021','2022','2023','2024','2025'],
    datasets:[
      {label:'Pengurangan (ton/hari)',data:[45,52,60,74,95,120,138],borderColor:'#1f7a4c',backgroundColor:'rgba(31,122,76,.1)',tension:.2},
      {label:'Terangkut ke TPA (ton/hari)',data:[210,205,198,190,185,178,170],borderColor:'#64748b',backgroundColor:'rgba(100,116,139,.1)',tension:.2}
    ]
  };
  const options={
    responsive:true,
    maintainAspectRatio:false,
    scales:{y:{beginAtZero:false,grid:{color:'rgba(0,0,0,.05)'}}}
  };
  new Chart(ctx.getContext('2d'),{type:'line',data,options});
});

