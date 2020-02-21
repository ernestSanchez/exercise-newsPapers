import { Injectable, ɵConsole } from '@angular/core';
import { HttpClient } from '@angular/common/http'
import { Observable } from 'rxjs'


@Injectable({
  providedIn: 'root'
})
export class DataServiceService {

  contents: object = []

  allPapers:object = []



  constructor(public _http: HttpClient) {
    this.inicio("us");

  }


  getDataNews() {
    return this.contents;
  }

  getData(i, clave) {
    return this.contents["articles"][i][clave];
  }


// getWorlPapers(){
//   return this.allPapers;
  
// }

// busca lista de articulos filtrado por pais
inicio(pais){

  this._http.get("http://newsapi.org/v2/top-headlines?country="+pais+"&apiKey=637cef4954134000b5b2b4c6748f15fd")
  .subscribe((responseApi) => {
    this.contents = responseApi})
    
}

// busca lista de periodicos
allPapersNews(){
  this._http.get("http://newsapi.org/v2/sources?apiKey=637cef4954134000b5b2b4c6748f15fd")
      .subscribe((responseAllApi) => {
        this.allPapers = responseAllApi["sources"]
        console.log(this.allPapers)
      }) 
}

//busca lista de articulos filtrado por periodico
newsByPaper(paper) {
  this._http.get("http://newsapi.org/v2/sources"+paper+"&apiKey=637cef4954134000b5b2b4c6748f15fd")
    .subscribe((responseSearchApi) => {
      this.contents = responseSearchApi
      // console.log(this.contents)
    })
}

// busca lista articulos filtrado por palabra clave
  submitUrl(url) {//<------funcion para hacer otra llamada a la api con otro endpoin dandole un argumrnto para que el valor se lo demos desde el input

    this._http.get("http://newsapi.org/v2/top-headlines?q="+url+"&apiKey=637cef4954134000b5b2b4c6748f15fd")
      .subscribe((responseSearchApi) => {
        this.contents = responseSearchApi
        // console.log(this.contents)
      })
}

}
