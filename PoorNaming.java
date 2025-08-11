import java.util.*;

public class PoorNaming {
    
    // 坏味道: 命名不当 - 使用单字母变量名和缩写
    public void doStuff(String s, int i, boolean b, List<String> l, Map<String, Object> m) {
        if (b) {
            for (String item : l) {
                if (item.length() > i) {
                    m.put(item, s + "_" + i);
                }
            }
        }
    }
    
    // 更多命名不当的例子
    public void processData(String str, int num, boolean flag, List<String> lst, Map<String, Object> map) {
        if (flag) {
            for (String elem : lst) {
                if (elem.length() > num) {
                    map.put(elem, str + "_" + num);
                }
            }
        }
    }
    
    public void calc(String n, int a, boolean t, List<String> items, Map<String, Object> data) {
        if (t) {
            for (String i : items) {
                if (i.length() > a) {
                    data.put(i, n + "_" + a);
                }
            }
        }
    }
    
    // 方法名不清晰
    public void func1() {
        System.out.println("Doing something");
    }
    
    public void func2() {
        System.out.println("Doing something else");
    }
    
    public void func3() {
        System.out.println("Doing another thing");
    }
    
    // 变量名不清晰
    public void processUser(String u, String e, String p, String a, String c) {
        String temp = u + " " + e + " " + p + " " + a + " " + c;
        System.out.println(temp);
    }
    
    // 类名不清晰
    public class Data {
        public String f1;
        public String f2;
        public String f3;
        public String f4;
        public String f5;
    }
}
