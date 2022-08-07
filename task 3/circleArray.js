class circleArray{
        constructor() {  
        
            // It store the length of array.
            this.length = 0; 
            
            // Object to store elements.
            this.data = {}; 
        }
        add(element) {
            this.data[this.length] = element;
            this.length++;
            return this.data;
        }
        get(index) {
            return this.data[(index % this.length + this.length) %  this.length];
        }
}

let circledArray = new circleArray();

circledArray.add("Київ");
circledArray.add("Харків");
circledArray.add("Херсон");

circledArray.get(4)
circledArray.get(-1)

