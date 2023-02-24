import { enableProdMode } from '@angular/core';
import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';

import { AppModule } from './app/app.module';
import { environment } from './environments/environment';
import { registerLicense } from '@syncfusion/ej2-base';
registerLicense('Mgo+DSMBaFt/QHRqVVhkVFpFdEBBXHxAd1p/VWJYdVt5flBPcDwsT3RfQF5jS3xQdkRmWXxbc3xRRw==;Mgo+DSMBPh8sVXJ0S0J+XE9AflRDX3xKf0x/TGpQb19xflBPallYVBYiSV9jS31TdEdgWX5bcHdQQmBeUA==;ORg4AjUWIQA/Gnt2VVhkQlFacldJXGFWfVJpTGpQdk5xdV9DaVZUTWY/P1ZhSXxQdkdhWn9fdXRWQ2RdVkU=;MTE4NTQ4MUAzMjMwMmUzNDJlMzBLeUJSL3hqL05FZ04wVGo5eE9FbTZWUC9UV3hwYm1ZT3pFbkMzeHY4NHFBPQ==;MTE4NTQ4MkAzMjMwMmUzNDJlMzBmVWlIWGRvWTFMZHBnT1hpeTNnSGFaOXNLWVUyYjQ1TzZ1amg2bTdVMVRBPQ==;NRAiBiAaIQQuGjN/V0Z+WE9EaFtKVmJLYVB3WmpQdldgdVRMZVVbQX9PIiBoS35RdUVhW3xecXFVRWVZUUF3;MTE4NTQ4NEAzMjMwMmUzNDJlMzBmUmgxSjJMd0x4Sng1OWpibnBFeS9SSkdqdHFLRUZqMGthZG1ISkVzV1JvPQ==;MTE4NTQ4NUAzMjMwMmUzNDJlMzBWY2RrSkVVbDdSdk9tRXZoVHV0YUIrakxrTVVQQ3kxeHEwV2xkODAzMlZ3PQ==;Mgo+DSMBMAY9C3t2VVhkQlFacldJXGFWfVJpTGpQdk5xdV9DaVZUTWY/P1ZhSXxQdkdhWn9fdXRWQ2ZfVUU=;MTE4NTQ4N0AzMjMwMmUzNDJlMzBCbGl3R0FUdTBzZU9GVkxqaVk0Ti9TbTRpVXVmQklwM2FDNGM2dk5nQW9jPQ==;MTE4NTQ4OEAzMjMwMmUzNDJlMzBjTm45ckk3NDBXeW8wdWVka2c1dk03ZUpkczVTc0NaRXhXWkVsdnhnVmJ3PQ==;MTE4NTQ4OUAzMjMwMmUzNDJlMzBmUmgxSjJMd0x4Sng1OWpibnBFeS9SSkdqdHFLRUZqMGthZG1ISkVzV1JvPQ==');
if (environment.production) {
  enableProdMode();
}

platformBrowserDynamic().bootstrapModule(AppModule)
  .catch(err => console.error(err));
