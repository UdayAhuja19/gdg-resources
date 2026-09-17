// Class timetables used by the Week Planner.
//
// One entry per major and year. `busy` lists class blocks as [day, startHour, endHour],
// with hours on a 24h clock (14.5 = 2:30 PM). Days: Mon, Tue, Wed, Thu, Fri.
// `flexible: true` marks groups with self-picked modules (most Year 3s): they count at half weight.
// To add a group, copy an entry, give it a new unique id, and commit.
window.GROUPS = [
 {id:'cs_y1',major:'CS / AI&CS / MEng CS&SE',year:'Y1',flexible:false,busy:[
   ['Mon',14,16],['Mon',16,18],['Tue',13,16],['Wed',11,12],['Wed',14,16],['Wed',16,17],['Wed',17,18],
   ['Thu',11,13],['Thu',13,14],['Thu',15,16]]},
 {id:'cs_y2',major:'CS / AI&CS / MEng CS&SE',year:'Y2',flexible:false,busy:[
   ['Mon',10,12],['Mon',14,16],['Tue',10,12],['Tue',14,15],['Tue',15,16],['Wed',10,13],
   ['Thu',10,11],['Thu',11,13],['Thu',13,14],['Thu',14,16]]},
 {id:'cs_y3',major:'CS / AI&CS / MEng CS&SE',year:'Y3',flexible:true,busy:[
   ['Mon',12,14],['Mon',16,18],['Tue',10,12],['Tue',13,15],['Wed',10,12],['Wed',13,15],['Thu',10,14]]},

 {id:'compeng_y1',major:'BEng Computer Engineering',year:'Y1',flexible:false,busy:[
   ['Mon',12,16],['Tue',8,11],['Tue',13,16],['Wed',8,11],['Wed',15,17],['Thu',8,11],['Thu',12,18]]},
 {id:'compeng_y2',major:'BEng Computer Engineering',year:'Y2',flexible:false,busy:[
   ['Mon',10,12],['Mon',13,16],['Tue',10,12],['Tue',13,18],['Wed',10,13],['Thu',8,13],['Thu',14,16]]},
 {id:'compeng_y3',major:'BEng Computer Engineering',year:'Y3',flexible:true,busy:[
   ['Mon',8,11],['Mon',12,14],['Mon',16,18],['Tue',10,12],['Tue',13,15],
   ['Wed',9,12],['Wed',13,15],['Wed',16,18],['Thu',12,14]]},

 {id:'mecheng_y1',major:'BEng Mechanical Engineering',year:'Y1',flexible:false,busy:[
   ['Mon',8,11],['Mon',12,16],['Tue',8,11],['Wed',8,11],['Wed',12,15],['Thu',8,11],['Thu',12,18]]},
 {id:'mecheng_y2',major:'BEng Mechanical Engineering',year:'Y2',flexible:false,busy:[
   ['Mon',8,11],['Mon',12,18],['Tue',12,15],['Wed',8,11],['Wed',13,16],['Thu',8,11],['Thu',12,15]]},
 {id:'mecheng_y3',major:'BEng Mechanical Engineering',year:'Y3',flexible:true,busy:[
   ['Tue',8,11],['Tue',15,18],['Wed',12,15],['Wed',16,18],['Thu',8,11],['Thu',12,15],['Fri',8,11]]},

 {id:'robo_y1',major:'BSc Robotics & AI',year:'Y1',flexible:false,busy:[
   ['Mon',8,11],['Tue',8,11],['Wed',8,11],['Wed',12,15],['Thu',8,11],['Thu',12,18]]},
 {id:'robo_y2',major:'BSc Robotics & AI',year:'Y2',flexible:false,busy:[
   ['Mon',12,18],['Tue',10,12],['Tue',16,18],['Wed',10,16],['Thu',8,11],['Thu',12,15]]},

 {id:'biomed_y1',major:'BSc Biomedical Science',year:'Y1',flexible:false,busy:[
   ['Mon',10,12],['Mon',13,16],['Tue',10,12],['Tue',13,15],['Wed',10,12],['Wed',13,14],
   ['Thu',9,12],['Thu',13,16],['Fri',9,12]]},
 {id:'biomed_y2',major:'BSc Biomedical Science',year:'Y2',flexible:false,busy:[
   ['Mon',10,11],['Mon',13,15],['Wed',13,14],['Thu',13,15]]},
 {id:'biomed_y3',major:'BSc Biomedical Science',year:'Y3',flexible:true,busy:[
   ['Mon',10,15],['Tue',10,12],['Wed',10,14],['Thu',10,15],['Fri',9,10]]},

 {id:'civil_y1',major:'BEng Civil Engineering',year:'Y1',flexible:false,busy:[
   ['Mon',8,11],['Mon',12,16],['Tue',8,11],['Wed',8,11],['Wed',12,15],['Wed',15,17],['Thu',8,11],['Thu',12,18]]},

 {id:'eee_y1',major:'BEng Electronic & Electrical Eng',year:'Y1',flexible:false,busy:[
   ['Mon',8,11],['Mon',12,16],['Tue',8,11],['Wed',8,11],['Wed',12,15],['Wed',15,17],['Thu',8,11],['Thu',12,18]]},

 {id:'busmgmt_y1',major:'BSc Business Management',year:'Y1',flexible:false,busy:[
   ['Tue',13,16],['Wed',8,9],['Wed',9,11],['Wed',16,18],['Thu',12,14],['Thu',14,18],['Fri',8,9]]},
 {id:'busmgmt_y2',major:'BSc Business Management',year:'Y2',flexible:false,busy:[
   ['Mon',8,11],['Mon',15,17],['Mon',16,18],['Tue',11,18],['Wed',11,15],['Thu',8,11],['Thu',12,15]]},
 {id:'busmgmt_y3',major:'BSc Business Management',year:'Y3',flexible:false,busy:[
   ['Mon',8,10],['Tue',8,10],['Tue',12,14],['Wed',8,10],['Wed',11,17]]},

 {id:'accfin_y1',major:'BSc Accounting and Finance',year:'Y1',flexible:false,busy:[
   ['Mon',12,14],['Tue',14,17],['Wed',8,15],['Fri',8,12]]},
 {id:'accfin_y2',major:'BSc Accounting and Finance',year:'Y2',flexible:false,busy:[
   ['Mon',11,14],['Mon',15,18],['Wed',11,16],['Fri',8,12]]},
 {id:'accfin_y3',major:'BSc Accounting and Finance',year:'Y3',flexible:false,busy:[
   ['Tue',10,13],['Wed',13,17],['Thu',9,15],['Fri',8,12]]},

 {id:'econ_y1',major:'BSc Economics',year:'Y1',flexible:false,busy:[
   ['Mon',8,10],['Mon',15,16],['Wed',8,10],['Wed',11,13],['Thu',10,12],['Thu',14,17],['Fri',10,12]]},
 {id:'econ_y2',major:'BSc Economics',year:'Y2',flexible:false,busy:[
   ['Tue',8,13],['Wed',10,14],['Thu',9,14],['Fri',8,10]]},
 {id:'econ_y3',major:'BSc Economics',year:'Y3',flexible:false,busy:[
   ['Mon',11,18],['Tue',14,16],['Wed',10,12],['Thu',9,16]]},

 {id:'psych_y1',major:'BSc Psychology',year:'Y1',flexible:false,busy:[
   ['Mon',11,13],['Mon',16,18],['Tue',12,13],['Tue',16,18],['Wed',12,14],['Thu',16,18]]},
 {id:'psych_y2',major:'BSc Psychology',year:'Y2',flexible:false,busy:[
   ['Mon',16,18],['Tue',8,10],['Tue',16,18],['Wed',11,13],['Thu',11,13]]},
 {id:'psych_y3',major:'BSc Psychology',year:'Y3',flexible:false,busy:[
   ['Tue',14,16],['Thu',8,13],['Thu',16,18]]},

 {id:'digmedia_y1',major:'BA Digital Media & Comms',year:'Y1',flexible:false,busy:[
   ['Mon',12,15],['Wed',12,15],['Thu',10,13]]},
 {id:'digmedia_y2',major:'BA Digital Media & Comms',year:'Y2',flexible:false,busy:[
   ['Mon',11,14],['Tue',10,13],['Wed',10,13]]},
];
