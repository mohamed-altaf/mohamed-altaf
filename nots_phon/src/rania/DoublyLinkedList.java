package rania;

class Node 
{
    public phone data;
    public Node next;
    public Node prev;
}
public class DoublyLinkedList {
      private Node head;
    private Node tail;
    int size;
 
    public boolean isEmpty() {
        return (head == null);
    }
 
    // used to insert a node at the start of linked list
    public void insert(phone data) 
    {
        Node newNode = new Node();
        newNode.data = data;
        newNode.next = null;
        newNode.prev=tail;
        if(tail!=null)
            tail.next=newNode;
        tail = newNode;
        if(head==null)
            head=newNode;
        size++;
    }
    // Use to delete node after particular node
    public void delete(phone p) {
        if(size == 0)
            return;
        for(Node M = head; M != null ; M = M.next){
            if(M.data.getName().equals(p.getName())){
                if(M == head)
                    head = M.next;
                else if(M == tail){
                    tail = M.prev;
                    tail.next = null;
                }
                else{
                   M.prev.next = M.next;
                   M.next.prev =M.prev;
                }
                size--;
            }
        }
 
    }
    //search by number
    
    public phone[] search_num(String num )
    {
        Node current = head;
        phone [] ar ;
        int size = 0;
        int i = 0;
        
        while (current != null)
        {
            if(current.data.getPhone().contains(num))
            {
                size++; 
            }
            current = current.next;
        }
        ar = new phone [size] ;
        current = head;
       while (current != null)
        {
            if(current.data.getPhone().contains(num))
            {
                ar[i++] = current.data; 
            }
            current = current.next;
        }
        return ar;
    }
    // search by name
    public phone[] search_name(String name )
    {
      {
       Node current = head;
        phone [] ar ;
        int size = 0;
        int i = 0;
        
        while (current != null)
        {
            if(current.data.getName().contains(name))
            {
                size++; 
            }
            current = current.next;
        }
        ar = new phone [size] ;
        current = head;
       while (current != null)
        {
            if(current.data.getName().contains(name))
            {
                ar[i++] = current.data; 
            }
            current = current.next;
        }
        return ar;
    }
  }
   
    public void update (String name , phone new_data)
    {
        Node current = head;
        while (current.next != null)
        {
            if (name.equals(current.data.getName()))
            {
                break;
            }
            current = current.next;
        }
        current.data.setName (new_data.getName());
        current.data.setPhone(new_data.getPhone());

    }
    
    
  
    public String[] sort()
    {
        int i = 0;
        Node current = head;
        while(current != null)
        {
            current = current.next;
            i++;
        }
        String[] x = new String [i];
        current = head;
        int j = 0;
        while(current != null)
        {
            x[j++] = current.data.getName();
            current = current.next;
        }
        return x;
    }
}
