

## Plan: Update Contact Information

### Overview
Update the email address and phone number across the website to reflect the correct business contact details.

### Changes Required

---

### 1. Update Footer Component

**File:** `src/components/Footer.tsx`

**Lines 61-62** - Update contact details:

| Current | New |
|---------|-----|
| `0412 345 678` | `0409 528 854` |
| `info@aspecthomes.com.au` | `admin@aspect-homes.com` |

---

### 2. Update Contact Component

**File:** `src/components/Contact.tsx`

**Line 66** - Update phone number:
- From: `0412 345 678`
- To: `0409 528 854`

**Line 75** - Update email address:
- From: `info@aspecthomes.com.au`
- To: `admin@aspect-homes.com`

---

### Summary

| Location | Field | New Value |
|----------|-------|-----------|
| Footer | Phone | 0409 528 854 |
| Footer | Email | admin@aspect-homes.com |
| Contact Section | Phone | 0409 528 854 |
| Contact Section | Email | admin@aspect-homes.com |

