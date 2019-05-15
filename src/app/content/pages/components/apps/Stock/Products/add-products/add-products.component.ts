import { Component, OnInit } from '@angular/core';
@Component({
  selector: 'm-add-products',
  templateUrl: './add-products.component.html',
  styleUrls: ['./add-products.component.scss']
})
export class ImageSnippet {
  constructor(
    public src: string,
    public file: File
  ) { }
}
export class AddProductsComponent implements OnInit {

  constructor(
    // private imageService: ImageService
    ) { }

  ngOnInit() {
  }
  foods = [
    { value: 'steak-0', viewValue: 'Steak' },
    { value: 'pizza-1', viewValue: 'Pizza' },
    { value: 'tacos-2', viewValue: 'Tacos' }
  ];
  // selectedFile: ImageSnippet;
  // processFile(imageInput: any) {
  //   const file: File = imageInput.files[0];
  //   const reader = new FileReader();

  //   reader.addEventListener('load', (event: any) => {

  //     this.selectedFile = new ImageSnippet(event.target.result, file);

  //     this.imageService.uploadImage(this.selectedFile.file).subscribe(
  //       (res) => {

  //       },
  //       (err) => {

  //       })
  //   });
  //   reader.readAsDataURL(file);
  // }
}
