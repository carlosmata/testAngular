import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';
import { FirstComponent } from './test/first.component';
import { SecondComponent} from './test2/second.component';
import { ContentComponent} from './test/content.component';
import { DataBindingComponent} from './test/databinding.component';
import { InputOutputComponent} from './test/inputoutput.component';
import { ClassStyleComponent} from './test/classstyle.component';
import { PipesComponent} from './test/pipes.component';
import { CustomPipe} from './test/custompipe.pipe';
import { OtherComponent } from './test/other.component';
import { MyIfComponent } from './test/myif.component';
import { MyForComponent } from './test/myfor.component';
import { MySwitchComponent } from './test/myswitch.component';
import { AlbumService } from './test/webservices/album.service';
import { LoginComponent } from './test/login.component';
import { FormComponent } from './test/form.component';
import { DetailComponent } from './routes/detail.component';
import { HomeComponent } from './routes/home.component';
import { routing } from './app.routing';

@NgModule({
  declarations: [
    AppComponent,
    FirstComponent,
    SecondComponent,
    ContentComponent,
    DataBindingComponent,
    InputOutputComponent,
    ClassStyleComponent,
    PipesComponent,
    CustomPipe,
    OtherComponent,
    MyIfComponent,
    MyForComponent,
    MySwitchComponent,
    LoginComponent,
    FormComponent,
    DetailComponent,
    HomeComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    routing
  ],
  providers: [ AlbumService ],
  bootstrap: [AppComponent]
})
export class AppModule { }
