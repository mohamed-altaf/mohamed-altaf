package rania;

import java.util.Arrays;
import java.util.Scanner;
import javax.swing.JOptionPane;

public class Rania {

    public static void main(String[] args) {
     DoublyLinkedList x = new DoublyLinkedList();
        Scanner k = new Scanner (System.in);
        do
        {
            int choice = Integer.parseInt(JOptionPane.showInputDialog(null, "Enter 1 for add , 2 for search name 3 for search number , 4 for sort , 5 for delete 6 for update"));
            String name,ph;
            phone g;
            phone [] t;
            switch(choice)
            {
                case 1:
                name = JOptionPane.showInputDialog(null,"Enter name ");
                ph =  JOptionPane.showInputDialog(null,"Enter phone number ");;
                  
                    g = new phone(name,ph);
                         x.insert(g);
                    System.out.println(name  +"=========>"+ ph);
               
                    break;
                case 2:
                    
                name = JOptionPane.showInputDialog(null,"Enter name ");                   
                k.nextLine();
                    t = x.search_name(name);   
                    for (int i = 0; i < t.length; i++) 
                    {
                       System.out.println(t[i].getName()+"\t"+t[i].getPhone());
                       JOptionPane.showMessageDialog(null, t[i].getName()+"\t"+t[i].getPhone());
                    }
                    break;
                case 3:
                
                 ph = JOptionPane.showInputDialog(null,"Enter phone ");
                    t = x.search_num(ph);
                    for (int i = 0; i < t.length; i++) 
                    {
                        System.out.println(t[i].getName()+"\t"+t[i].getPhone());
                        JOptionPane.showMessageDialog(null, t[i].getName()+"\t"+t[i].getPhone());
                    }
                    break;             
                case 4:
                    String [] u = x.sort();
                    Arrays.sort(u);
                    for (int i = 0; i < u.length; i++) 
                    {
                        System.out.println(u[i]);
                    }
                    break;
                case 5:
                 name = JOptionPane.showInputDialog(null,"Enter name ");
                 ph = JOptionPane.showInputDialog(null,"Enter phone ");  
                    g = new phone(name,ph);
                        x.delete(g);
                    break;
                case 6:
                    System.out.println("Enter name you need update");
                    k.nextLine();
                    String h = k.nextLine();
                    name = JOptionPane.showInputDialog(null,"Enter name ");
                    ph = JOptionPane.showInputDialog(null,"Enter phone ");
                    g = new phone (name,ph);
                    x.update(h, g);
                    break;
            }
        }while(true);
   
        
    }
}
