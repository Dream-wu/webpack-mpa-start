import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
const swig = require('swig');
async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  app.useStaticAssets(__dirname + '/public'); // 静态资源存放目录
  app.setBaseViewsDir(__dirname + '/views'); // 设置模板
  app.engine('html', swig.renderFile);
  app.setViewEngine('html');
  await app.listen(3000);
}
bootstrap();