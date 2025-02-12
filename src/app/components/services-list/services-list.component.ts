import { Component } from '@angular/core';
import { ServiceCardComponent } from '../service-card/service-card.component';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-services-list',
  imports: [ServiceCardComponent, CommonModule],
  templateUrl: './services-list.component.html',
  styleUrl: './services-list.component.scss'
})
export class ServicesListComponent {
    services = [
    {
      title: 'Web Development',
      description: 'I specialize in building modern, high-performance websites that provide seamless user experiences. Utilizing the latest frameworks such as Angular, React, and Node.js, I create scalable, responsive sites that function flawlessly across all devices and platforms, ensuring your users get the best experience possible. From custom web apps to e-commerce solutions, I bring your web presence to life.',
      emoji: '🌐',
    },
    {
      title: 'AI Solutions',
      description: 'Harness the power of Artificial Intelligence to drive innovation in your business. I design and implement AI-powered applications using cutting-edge technologies such as deep learning, machine learning, and natural language processing (NLP). Whether it’s developing predictive models, automating processes, or creating intelligent systems that learn and adapt, I can help you leverage AI for smarter solutions.',
      emoji: '🤖',
    },
    {
      title: 'Mobile Development',
      description: 'I build cross-platform mobile applications that work seamlessly across iOS and Android. By utilizing frameworks like Flutter and React Native, I ensure your app provides a native-like experience with excellent performance, intuitive interfaces, and advanced features. Whether you\'re looking to create an app for your business or a startup idea, I develop solutions that meet your unique needs and engage your audience effectively.',
      emoji: '📱',
    }
  ];


}
