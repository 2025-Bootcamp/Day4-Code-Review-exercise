import java.util.*;

public class DeepNesting {
    
    // 坏味道: 过深的嵌套 (超过3层)
    public void processNestedData(List<List<List<List<String>>>> data) {
        for (List<List<List<String>>> level1 : data) {
            for (List<List<String>> level2 : level1) {
                for (List<String> level3 : level2) {
                    for (String item : level3) {
                        if (item != null) {
                            if (item.length() > 0) {
                                if (item.startsWith("A")) {
                                    if (item.endsWith("Z")) {
                                        if (item.contains("test")) {
                                            System.out.println("Found special item: " + item);
                                        }
                                    }
                                }
                            }
                        }
                    }
                }
            }
        }
    }
    
    public void processUserOrders(List<String> users, Map<String, List<String>> userOrders, Map<String, Map<String, Object>> orderDetails) {
        for (String user : users) {
            if (user != null) {
                if (userOrders.containsKey(user)) {
                    List<String> orders = userOrders.get(user);
                    if (orders != null) {
                        for (String order : orders) {
                            if (order != null) {
                                if (orderDetails.containsKey(order)) {
                                    Map<String, Object> details = orderDetails.get(order);
                                    if (details != null) {
                                        if (details.containsKey("status")) {
                                            String status = (String) details.get("status");
                                            if (status != null) {
                                                if (status.equals("pending")) {
                                                    if (details.containsKey("amount")) {
                                                        Double amount = (Double) details.get("amount");
                                                        if (amount != null) {
                                                            if (amount > 100.0) {
                                                                System.out.println("High value pending order: " + order);
                                                            }
                                                        }
                                                    }
                                                }
                                            }
                                        }
                                    }
                                }
                            }
                        }
                    }
                }
            }
        }
    }
    
    public void validateComplexData(Map<String, Object> data, List<String> requiredFields, Map<String, Object> validationRules) {
        if (data != null) {
            if (!data.isEmpty()) {
                for (String field : requiredFields) {
                    if (field != null) {
                        if (data.containsKey(field)) {
                            Object value = data.get(field);
                            if (value != null) {
                                if (validationRules.containsKey(field)) {
                                    Object rule = validationRules.get(field);
                                    if (rule != null) {
                                        if (rule instanceof String) {
                                            String stringRule = (String) rule;
                                            if (stringRule.equals("required")) {
                                                if (value instanceof String) {
                                                    String stringValue = (String) value;
                                                    if (stringValue.trim().isEmpty()) {
                                                        System.out.println("Field " + field + " is required");
                                                    }
                                                }
                                            }
                                        }
                                    }
                                }
                            }
                        }
                    }
                }
            }
        }
    }
}
