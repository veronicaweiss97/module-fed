import { Directive, ElementRef, Renderer2, OnInit } from '@angular/core';

@Directive({
  selector: '[appNeonBorder]',
  standalone: true,
})
export class NeonBorderDirective implements OnInit {
  constructor(private el: ElementRef, private renderer: Renderer2) {}

  ngOnInit(): void {
    const element = this.el.nativeElement;

    // Add base styles
    this.renderer.setStyle(element, 'position', 'relative');
    this.renderer.setStyle(element, 'border', '2px solid #F8B55F');
    this.renderer.setStyle(element, 'borderRadius', '20px');
    this.renderer.setStyle(
      element,
      'animation',
      'neon-glow 2s infinite alternate'
    );
    this.renderer.setStyle(
      element,
      'boxShadow',
      '0 0 5px #F8B55F, 0 0 15px #F8B55F'
    );

    // Inject keyframes dynamically
    const style = document.createElement('style');
    style.textContent = `
      @keyframes neon-glow {
        from {
          box-shadow: 0 0 5px #F8B55F, 0 0 15px #F8B55F;
        }
        to {
          box-shadow: 0 0 20px #C95792, 0 0 30px #7C4585, 0 0 40px #3D365C;
        }
      }
    `;
    document.head.appendChild(style);
  }
}
