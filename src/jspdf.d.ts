declare module 'jspdf' {
  export class jsPDF {
    constructor(orientation?: 'portrait' | 'landscape', unit?: string, format?: string | number[]);
    
    text(text: string | string[], x: number, y: number, options?: any): jsPDF;
    setFontSize(size: number): jsPDF;
    setFont(fontName: string, fontStyle?: string): jsPDF;
    setTextColor(r: number, g: number, b: number): jsPDF;
    setFillColor(r: number, g: number, b: number): jsPDF;
    setDrawColor(r: number, g: number, b: number): jsPDF;
    rect(x: number, y: number, w: number, h: number, style?: 'S' | 'F' | 'FD'): jsPDF;
    addPage(format?: string | number[], orientation?: 'portrait' | 'landscape'): jsPDF;
    save(filename: string): jsPDF;
    splitTextToSize(text: string, maxWidth: number): string[];
    
    internal: {
      pageSize: {
        getWidth(): number;
        getHeight(): number;
      };
    };
    
    autoTable?(options: any): jsPDF;
  }
}

declare module 'jspdf-autotable' {
  const content: any;
  export default content;
}
