import {Component} from '@angular/core';

function calculatePrice(basePrice: number, location: string, isZoom: boolean, friendDiscount: boolean): number {
  let extra = 0;

  const zone10 = ["קריית אונו", "יהוד", "בני עטרות", "גמזו", "כפר דניאל"];
  const zone20 = ["פתח תקווה", "לוד", "רמלה", "מודיעין"];

  if (zone10.includes(location)) extra += 10;
  if (zone20.includes(location)) extra += 20;

  let finalPrice = basePrice + extra;

  if (isZoom) finalPrice *= 0.9;
  if (friendDiscount) finalPrice *= 0.8;

  return Math.round(finalPrice);
}

@Component({
  selector: 'app-pricing-page',
  standalone: false,

  templateUrl: './pricing-page.component.html',
  styleUrl: './pricing-page.component.scss'
})
export class PricingPageComponent {
  protected JHS: number = 90;
  protected HIS: number = 100;
  protected CUS: number = 150;
  protected H2: number = 0.9;
  protected H4: number = 0.85;
  protected H8: number = 0.8;

  protected calculate(basePrice: number, hoursDisc: number, hours: number) {return hours * hoursDisc * basePrice - (hours * hoursDisc * basePrice) % 10;}
}
