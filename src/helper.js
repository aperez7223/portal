export function getType(type,search){

  const baseURL = ''

  let url;
  switch(type) {
    case "All":
    url =baseURL+'project%20%3D%20SPMFDBK%20AND%20text%20~%20"'+search+'"'
    break;
    case "ID":
    url =baseURL+ 'key%20%3D%20'+ search;
    break;
    case "Title":
   url =baseURL+'project%20%3D%20SPMFDBK%20AND%20summary%20~%20"'+search+'"'
   break;
   case "Status":
   url =baseURL+'project%20%3D%20SPMFDBK%20AND%20status%20%3D%20'+search+''
   break;
   case "Requested By":
   url =baseURL+'project%20%3D%20SPMFDBK%20AND%20"Requested%20By"%20~%20"'+search+'"'
   break;
   case "Nature of Change":
   url =baseURL+'project%20%3D%20SPMFDBK%20AND%20"Nature%20of%20Change"%20%3D%20"'+search+'"'
   break;
   case "Impact":
   url =baseURL+'project%20%3D%20SPMFDBK%20AND%20"Impact"%20%3D%20"'+search.replace(/,/g,"%2C").replace(/&/g, "%26")+'"'
   break;
   case "User Name":
   url =baseURL+'project%20%3D%20SPMFDBK%20AND%20"User%20Name"%20~%20"'+search+'"'
   break;
   case "Priority":
   url =baseURL+'project%20%3D%20SPMFDBK%20AND%20priority%20%3D%20'+search+''
   break;
   case "Request Scope":
   url =baseURL+'project%20%3D%20SPMFDBK%20AND%20"Request%20Scope"%20~%20'+search+''
   break;
   case "Change Request":
   url =baseURL+'project%20%3D%20SPMFDBK%20AND%20"Change%20Request"%20%3D%20"'+search+'"'
   break;
   case "Comments":
   url =baseURL+'project%20%3D%20SPMFDBK%20AND%20comment%20~%20"'+search+'"'
   break;
   default:
   url =baseURL+'project%20%3D%20SPMFDBK%20AND%20text%20~%20"'+search+'"'
   break;
  }
  return url;
}
